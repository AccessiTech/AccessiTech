#!/usr/bin/env python3
"""
Analyze Chrome DevTools Performance Trace JSON files.
Extracts key timing metrics for SSG performance comparison.
"""

import json
import sys
from pathlib import Path
from typing import Dict, List, Any


def parse_trace(trace_path: str) -> Dict[str, Any]:
    """Parse a Chrome trace file and extract key metrics."""
    with open(trace_path, 'r') as f:
        data = json.load(f)
    
    # Chrome trace format: { "traceEvents": [...], "metadata": {...} }
    events = data.get('traceEvents', [])
    
    metrics = {
        'file': Path(trace_path).name,
        'first_paint': None,
        'first_contentful_paint': None,
        'dom_content_loaded': None,
        'load_event': None,
        'script_eval_count': 0,
        'script_eval_total_ms': 0,
        'network_requests': 0,
        'js_size_kb': 0,
        'css_size_kb': 0,
    }
    
    # Track timing events
    for event in events:
        name = event.get('name', '')
        phase = event.get('ph', '')
        ts = event.get('ts', 0)  # Timestamp in microseconds
        
        # Paint timing (Chrome uses 'R' for paint events)
        if name == 'firstPaint' and phase == 'R':
            metrics['first_paint'] = ts / 1000  # Convert to ms
        elif name == 'firstContentfulPaint' and phase == 'R':
            metrics['first_contentful_paint'] = ts / 1000
        
        # Document timing
        elif name == 'domContentLoadedEventEnd' and phase == 'I':
            metrics['dom_content_loaded'] = ts / 1000
        elif name == 'loadEventEnd' and phase == 'I':
            metrics['load_event'] = ts / 1000
        
        # Script evaluation (count only complete 'X' events to avoid double-counting)
        elif name == 'EvaluateScript' and phase == 'X':
            metrics['script_eval_count'] += 1
            dur = event.get('dur', 0)
            metrics['script_eval_total_ms'] += dur / 1000
        
        # Network requests
        elif name == 'ResourceFinish' and phase == 'I':
            metrics['network_requests'] += 1
            args = event.get('args', {})
            data = args.get('data', {})
            encoded_size = data.get('encodedDataLength', 0)
            mime = data.get('mimeType', '')
            
            if 'javascript' in mime:
                metrics['js_size_kb'] += encoded_size / 1024
            elif 'css' in mime:
                metrics['css_size_kb'] += encoded_size / 1024
    
    return metrics


def format_metrics(metrics: Dict[str, Any]) -> str:
    """Format metrics as readable output."""
    lines = [
        f"\n{'='*60}",
        f"TRACE ANALYSIS: {metrics['file']}",
        f"{'='*60}",
        "",
        "TIMING METRICS:",
        f"  First Paint:              {metrics['first_paint']:.2f} ms" if metrics['first_paint'] else "  First Paint:              Not found",
        f"  First Contentful Paint:   {metrics['first_contentful_paint']:.2f} ms" if metrics['first_contentful_paint'] else "  First Contentful Paint:   Not found",
        f"  DOM Content Loaded:       {metrics['dom_content_loaded']:.2f} ms" if metrics['dom_content_loaded'] else "  DOM Content Loaded:       Not found",
        f"  Load Event:               {metrics['load_event']:.2f} ms" if metrics['load_event'] else "  Load Event:               Not found",
        "",
        "SCRIPT EVALUATION:",
        f"  Total Scripts Evaluated:  {metrics['script_eval_count']}",
        f"  Total Evaluation Time:    {metrics['script_eval_total_ms']:.2f} ms",
        "",
        "NETWORK:",
        f"  Total Requests:           {metrics['network_requests']}",
        f"  JavaScript Size:          {metrics['js_size_kb']:.2f} KB",
        f"  CSS Size:                 {metrics['css_size_kb']:.2f} KB",
        f"{'='*60}",
    ]
    return '\n'.join(lines)


def compare_traces(live_metrics: Dict, branch_metrics: Dict) -> str:
    """Compare two trace metrics and show deltas."""
    lines = [
        f"\n{'='*60}",
        "TRACE COMPARISON: Live vs Branch",
        f"{'='*60}",
        "",
        f"{'Metric':<30} {'Live':<15} {'Branch':<15} {'Delta':<15}",
        f"{'-'*30} {'-'*15} {'-'*15} {'-'*15}",
    ]
    
    # Timing metrics
    if live_metrics['first_contentful_paint'] and branch_metrics['first_contentful_paint']:
        live_fcp = live_metrics['first_contentful_paint']
        branch_fcp = branch_metrics['first_contentful_paint']
        delta = branch_fcp - live_fcp
        delta_str = f"{'+' if delta > 0 else ''}{delta:.0f} ms"
        lines.append(f"{'FCP':<30} {live_fcp:.0f} ms{'':<7} {branch_fcp:.0f} ms{'':<7} {delta_str:<15}")
    
    if live_metrics['dom_content_loaded'] and branch_metrics['dom_content_loaded']:
        live_dcl = live_metrics['dom_content_loaded']
        branch_dcl = branch_metrics['dom_content_loaded']
        delta = branch_dcl - live_dcl
        delta_str = f"{'+' if delta > 0 else ''}{delta:.0f} ms"
        lines.append(f"{'DOM Content Loaded':<30} {live_dcl:.0f} ms{'':<7} {branch_dcl:.0f} ms{'':<7} {delta_str:<15}")
    
    if live_metrics['load_event'] and branch_metrics['load_event']:
        live_load = live_metrics['load_event']
        branch_load = branch_metrics['load_event']
        delta = branch_load - live_load
        delta_str = f"{'+' if delta > 0 else ''}{delta:.0f} ms"
        lines.append(f"{'Load Event':<30} {live_load:.0f} ms{'':<7} {branch_load:.0f} ms{'':<7} {delta_str:<15}")
    
    lines.append("")
    
    # Script evaluation
    live_scripts = live_metrics['script_eval_count']
    branch_scripts = branch_metrics['script_eval_count']
    delta_scripts = branch_scripts - live_scripts
    lines.append(f"{'Scripts Evaluated':<30} {live_scripts:<15} {branch_scripts:<15} {'+' if delta_scripts > 0 else ''}{delta_scripts:<15}")
    
    live_eval_time = live_metrics['script_eval_total_ms']
    branch_eval_time = branch_metrics['script_eval_total_ms']
    delta_eval = branch_eval_time - live_eval_time
    lines.append(f"{'Script Eval Time':<30} {live_eval_time:.0f} ms{'':<7} {branch_eval_time:.0f} ms{'':<7} {'+' if delta_eval > 0 else ''}{delta_eval:.0f} ms")
    
    lines.append("")
    
    # Network
    live_js = live_metrics['js_size_kb']
    branch_js = branch_metrics['js_size_kb']
    delta_js = branch_js - live_js
    lines.append(f"{'JavaScript Size':<30} {live_js:.0f} KB{'':<7} {branch_js:.0f} KB{'':<7} {'+' if delta_js > 0 else ''}{delta_js:.0f} KB")
    
    lines.append(f"{'='*60}")
    
    return '\n'.join(lines)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python analyze_trace.py <trace_file> [<second_trace_for_comparison>]")
        sys.exit(1)
    
    trace1_path = sys.argv[1]
    metrics1 = parse_trace(trace1_path)
    print(format_metrics(metrics1))
    
    if len(sys.argv) >= 3:
        trace2_path = sys.argv[2]
        metrics2 = parse_trace(trace2_path)
        print(format_metrics(metrics2))
        print(compare_traces(metrics1, metrics2))
