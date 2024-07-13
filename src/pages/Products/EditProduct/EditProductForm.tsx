import { useForm, Controller } from 'react-hook-form';
import { useUpdateProductMutation } from '@/redux/features/productsApi';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select as RadixSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Select from 'react-select';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: string;
  category?: string;
  tags?: { label: string; value: string }[];
  images: string[];
  inventory?: {
    quantity?: number;
    inStock?: boolean;
  };
  rating?: number;
}

const EditProductForm = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const { register, handleSubmit, control, reset } = useForm<Product>({
    defaultValues: {
      ...product,
      tags: product.tags?.map((tag: any) => ({ label: tag, value: tag })),
      inventory: {
        ...product.inventory,
        inStock: product.inventory?.inStock ?? true,
      },
    },
  });
  const [updateProduct] = useUpdateProductMutation();

  const handleFormSubmit = async (updatedProduct: Product) => {
    const loadingToastId = toast.loading('Updating product...');
    try {
      const formattedProduct = {
        ...updatedProduct,
        tags: updatedProduct.tags?.map((tag) => tag.value),
      };
      await updateProduct({ id: product._id, ...formattedProduct }).unwrap();
      toast.success('Product updated successfully');
      toast.dismiss(loadingToastId);
      onClose();
      reset();
    } catch (error) {
      toast.error('Failed to update product');
      toast.dismiss(loadingToastId);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded w-full max-w-md h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
            className="mb-4"
          />
          <Input
            type="text"
            placeholder="Description"
            {...register('description', { required: true })}
            className="mb-4"
          />
          <Input
            type="text"
            placeholder="Price"
            {...register('price', { required: true })}
            className="mb-4"
          />
          <Controller
            name="category"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadixSelect {...field} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Jacket">Jacket</SelectItem>
                    <SelectItem value="Tent">Tent</SelectItem>
                    <SelectItem value="Camping Stove">Camping Stove</SelectItem>
                    <SelectItem value="Portable Chair">Portable Chair</SelectItem>
                    <SelectItem value="Flashlights">Flashlights</SelectItem>
                    <SelectItem value="Camping Cookware">Camping Cookware</SelectItem>
                    <SelectItem value="First Aid Kit">First Aid Kit</SelectItem>
                    <SelectItem value="Water Bottle">Water Bottle</SelectItem>
                    <SelectItem value="Sleeping Bag">Sleeping Bag</SelectItem>
                    <SelectItem value="Backpack">Backpack</SelectItem>
                    <SelectItem value="Hiking Boots">Hiking Boots</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </RadixSelect>
            )}
          />
          <p className="mb-4"></p>
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={[
                  { value: 'Best Selling', label: 'Best Selling' },
                  { value: 'Featured', label: 'Featured' },
                ]}
                className="my-4"
                placeholder="Select tags"
                onChange={(value) => field.onChange(value)}
              />
            )}
          />
          <Input
            type="text"
            placeholder="Image 1 URL"
            {...register('images.0', { required: true })}
            className="my-4"
          />
          <Input
            type="text"
            placeholder="Image 2 URL"
            {...register('images.1', { required: true })}
            className="mb-4"
          />
          <Input
            type="text"
            placeholder="Image 3 URL"
            {...register('images.2', { required: true })}
            className="mb-4"
          />
          <Input
            type="number"
            step="0.1"
            placeholder="Quantity"
            {...register('inventory.quantity', { required: true })}
            className="mb-4"
          />

          <Button
            className="my-4 bg-black text-white hover:bg-white hover:text-black hover:border uppercase"
            type="submit"
          >
            Update
          </Button>
          <Button
            className="ml-2 bg-black text-white hover:bg-white hover:text-black hover:border uppercase"
            onClick={onClose}
          >
            Cancel
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
