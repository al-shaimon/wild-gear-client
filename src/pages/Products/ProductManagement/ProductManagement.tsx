import { useEffect, useState } from 'react';
import { useGetProductsQuery, useDeleteProductMutation } from '@/redux/features/productsApi';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { CirclesWithBar } from 'react-loader-spinner';
import CreateProductForm from '@/pages/Products/CreateProduct/CreateProductForm';
import EditProductForm from '@/pages/Products/EditProduct/EditProductForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

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

const ProductManagement = () => {
  const { data, isLoading, refetch } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<string | null>(null);

  // Refetch product every second
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(interval);
  }, [refetch]);

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success('Product deleted successfully');
      setProductIdToDelete(null);
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  const openCreateForm = () => {
    setIsCreateFormOpen(true);
  };

  const closeCreateForm = () => {
    setIsCreateFormOpen(false);
  };

  const openEditForm = (product: Product) => {
    setSelectedProduct(product);
    setIsEditFormOpen(true);
  };

  const closeEditForm = () => {
    setSelectedProduct(null);
    setIsEditFormOpen(false);
  };

  const openConfirmDialog = (id: string) => {
    setProductIdToDelete(id);
    setIsConfirmDialogOpen(true);
  };

  const closeConfirmDialog = () => {
    setProductIdToDelete(null);
    setIsConfirmDialogOpen(false);
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <Button
        className="bg-black text-white hover:bg-white hover:text-black hover:border uppercase"
        onClick={openCreateForm}
      >
       Add new product
      </Button>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((product: Product) => (
            <TableRow key={product._id}>
              <TableCell>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <div className="flex">
                  <Button
                    className="bg-black text-white hover:bg-white hover:text-black uppercase"
                    onClick={() => openEditForm(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="ml-2 hover:bg-white hover:text-black uppercase"
                    variant="destructive"
                    onClick={() => openConfirmDialog(product._id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {isCreateFormOpen && <CreateProductForm onClose={closeCreateForm} />}
      {isEditFormOpen && selectedProduct && (
        <EditProductForm product={selectedProduct} onClose={closeEditForm} />
      )}

      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>Are you sure you want to delete this product?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="uppercase" variant="ghost" onClick={closeConfirmDialog}>
              Cancel
            </Button>
            <Button
              className="uppercase"
              variant="destructive"
              onClick={() => {
                if (productIdToDelete) {
                  handleDeleteProduct(productIdToDelete);
                  closeConfirmDialog();
                }
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductManagement;
