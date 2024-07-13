import { useEffect, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '@/redux/features/productsApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  setCategory,
  setPriceRange,
  setSortBy,
  clearFilters,
} from '@/redux/features/productsSlice';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ListOrderedIcon } from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const [searchTerm, setSearchTerm] = useState('');
  const { data, isLoading, refetch } = useGetProductsQuery({ searchTerm });

  const dispatch = useAppDispatch();
  const { priceRange, sortBy, sortOrder } = useAppSelector((state) => state.products);

  useEffect(() => {
    refetch();
  }, [searchTerm, refetch]);

  const handleCategoryChange = (value: string) => {
    dispatch(setCategory(value === 'all' ? '' : value));
    setSearchParams({ category: value });
  };

  const handlePriceRangeChange = (value: [number, number]) => {
    dispatch(setPriceRange(value));
  };

  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split('-');
    dispatch(setSortBy({ sortBy, sortOrder }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSearchParams({});
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CirclesWithBar
          height="100"
          width="100"
          color="#000"
          outerCircleColor="#000"
          innerCircleColor="#000"
          barColor="#000"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  const categories = Array.from(new Set(data?.data.map((product: any) => product.category)));

  const filteredProducts = data?.data
    .filter((product: any) => !category || category === 'all' || product.category === category)
    .filter((product: any) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a: any, b: any) => {
      if (sortBy === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      }
      return 0;
    });

  const headingTitle = category && category !== 'all' ? `Category: ${category}` : 'All Products';

  return (
    <section className="mx-4">
      <div className="pt-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-0">{headingTitle}</h2>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
            <Input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64"
            />
            <Select onValueChange={handleCategoryChange} value={category}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat: any) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="w-full md:w-64">
              <h3 className="text-base font-medium mb-2">Price Range</h3>
              <Slider
                min={0}
                max={200}
                step={1}
                value={priceRange}
                onValueChange={handlePriceRangeChange}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="w-4 h-4" />
                  Sort by
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                <DropdownMenuRadioGroup
                  value={`${sortBy}-${sortOrder}`}
                  onValueChange={handleSortChange}
                >
                  <DropdownMenuRadioItem value="price-asc">
                    Price: Low to High
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-desc">
                    Price: High to Low
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={handleClearFilters}>Clear Filters</Button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 min-h-[80dvh]">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product: any) => (
              <Link
                key={product._id}
                to={`/products/${product._id}`}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <div>
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt={product.name}
                      className="object-cover object-center w-full h-full block"
                      src={product.images[0]}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {product.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                    <p className="mt-1">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full text-center py-12">
              <h3 className="text-2xl font-semibold">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
