import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Blog, BlogOrder, clearFilters, setFilter, useBlogEntriesArray, useFilters } from '../../store/blog';
import './BlogFilters.scss';

export interface BlogFiltersProps {
  pathname: string;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({ pathname }) => {
  const dispatch = useDispatch();
  const { category: selectedCategory, tags: selectedTags, series: selectedSeries } = useFilters();
  const allEntries = useBlogEntriesArray({ order: BlogOrder.DATE_DESC, pathname });

  const categories = Array.from(
    new Set(allEntries.map((e: Blog) => e.category).filter(Boolean))
  ) as string[];

  const allTags = Array.from(
    new Set(allEntries.flatMap((e: Blog) => e.tags || []))
  ) as string[];

  const allSeries = Array.from(
    new Set(allEntries.map((e: Blog) => e.series).filter(Boolean))
  ) as string[];

  const hasActiveFilter =
    selectedCategory !== '' || selectedTags.length > 0 || selectedSeries !== '';

  const handleCategoryClick = (cat: string) => {
    dispatch(setFilter({ category: selectedCategory === cat ? '' : cat }));
  };

  const handleTagClick = (tag: string) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    dispatch(setFilter({ tags: next }));
  };

  const handleSeriesClick = (s: string) => {
    dispatch(setFilter({ series: selectedSeries === s ? '' : s }));
  };

  if (categories.length === 0 && allTags.length === 0 && allSeries.length === 0) {
    return null;
  }

  return (
    <div className="blog-filters" aria-label="Blog filters">
      {categories.length > 0 && (
        <div className="blog-filters__section">
          <span className="blog-filters__label">Category:</span>
          <ButtonGroup className="blog-filters__group" aria-label="Filter by category">
            <Button
              variant={selectedCategory === '' ? 'primary' : 'outline-primary'}
              size="sm"
              aria-pressed={selectedCategory === ''}
              aria-label="Show all categories"
              onClick={() => dispatch(clearFilters())}
            >
              All
            </Button>
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'primary' : 'outline-primary'}
                size="sm"
                aria-pressed={selectedCategory === cat}
                aria-label={`Filter by category: ${cat}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      )}

      {allSeries.length > 0 && (
        <div className="blog-filters__section">
          <span className="blog-filters__label">Series:</span>
          <ButtonGroup className="blog-filters__group" aria-label="Filter by series">
            {allSeries.map(s => (
              <Button
                key={s}
                variant={selectedSeries === s ? 'secondary' : 'outline-secondary'}
                size="sm"
                aria-pressed={selectedSeries === s}
                aria-label={`Filter by series: ${s}`}
                onClick={() => handleSeriesClick(s)}
              >
                {s}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      )}

      {allTags.length > 0 && (
        <div className="blog-filters__section">
          <span className="blog-filters__label">Tags:</span>
          <div className="blog-filters__tags">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTags.includes(tag) ? 'dark' : 'outline-dark'}
                size="sm"
                className="blog-filters__tag"
                aria-pressed={selectedTags.includes(tag)}
                aria-label={`Filter by tag: ${tag}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      )}

      {hasActiveFilter && (
        <div className="blog-filters__section">
          <Button
            variant="link"
            size="sm"
            className="blog-filters__clear"
            onClick={() => dispatch(clearFilters())}
            aria-label="Clear all filters"
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogFilters;
