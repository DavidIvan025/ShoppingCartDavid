import { products } from "../script/data";

export default function RecomendedProducts() {
    const listItems = products.map(product =>
        <div className='product-card' key={product.id}>
            <div className='overflow-hidden'>
                <img src={product.image} loading='lazy' />
            </div>
            <div className='p-4 space-y-6'>
                <p className='text-sm line-clamp-2 hover:underline hover:underline-offset-1 hover:text-blue-500'>{product.description}</p>
                <span className='text-md'>{product.price}</span>
            </div>
        </div>
    );
    return (
        <>
            <div className='@container mt-6 space-y-6 mx-4'>
                <p className='text-xl'>You may also like</p>
                <div className='grid grid-cols-2 lg:grid-cols-4 grid-row-col place-items-center gap-3'>
                    {listItems}
                </div>

            </div>

        </>
    );

}