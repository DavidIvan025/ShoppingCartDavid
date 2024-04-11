import '../css/main.css';
import { useState } from 'react';
import Header from '../components/Header';
import ProductAlert from '../components/ProductAlert';
import RecomendedProducts from '../components/RecomendedProducts';
import Footer from '../components/Footer';

export default function Home() {
    const [count, setCount] = useState(1);

    return (
        <>
            <Header />
            <ProductAlert />
            <div className='@container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                    <div className='flex items-center justify-center lg:items-start'>
                        <div className='relative inline-flex justify-center items-center cursor-pointer'>
                            <img className='flex-none object-cover' draggable='false' src='https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68' loading='lazy' />
                            <a className='glass-btn'><i className='fa fa-search' aria-hidden="true"></i></a>
                        </div>

                    </div>
                    <div className='main-product flex flex-col'>
                        <p>Akira Toyirama</p>
                        <h1 className='font-bold text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dignissimos sint in.Adipisci
                            libero cumque earum quas possimus praesentium aperiam
                            veniam asperiores atque.</h1>
                        <span>¥1,999 JPY</span>
                        <label className='text-xs'>Tax Included. <a className='text-blue-800 underline'>Shipping</a> calculated at checkout</label>
                        <div className='quantity-form relative mt-3'>
                            <span className='text-sm absolute left-0 top-1'>Quantity</span>
                            <div className='drop-shadow-sm inline-flex p-6 items-center'>
                                <button id='btnReduce' onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
                                <input id='quantityValue' type='number' name='quantity' min='1' value={count}></input>
                                <button id='btnSum' onClick={() => setCount(count + 1)}>+</button>
                            </div>
                        </div>
                        <div className='btn-form flex flex-col text-center max-w-[26rem] mb-6 space-y-2'>
                            <button className='border-2 hover:border-[3px] border-zinc-700 bg-white' type='submit'> Add to cart</button>
                            <button className='inline-flex font-medium text-white bg-purple-600 bg-gradient-to-r hover:from-purple-500'>Buy with <i className='fa fa-share ml-1' aria-hidden="true"></i></button>
                            <label className='underline underline-offset-2 text-sm'>More payment options</label>
                        </div>
                        <label className='text-blue-500 text-sm'><i className='fa fa-share mr-2' aria-hidden="true"></i>Share</label>
                        <div className='tags'>
                            <table className="table-auto border-spacing-x-5 border border-slate-300 drop-shadow-sm mx-1">
                                <thead>
                                    <tr>
                                        <th className='border border-slate-300 p-4'>Tags</th>
                                    </tr>
                                </thead>
                                <tbody className='flex flex-wrap p-2'>
                                    <tr>
                                        <td className='underline'>Action, </td>
                                        <td className='underline'>Romantic, </td>
                                        <td className='underline'>Adventure</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='info space-y-6'>
                            <p><a className='underline'>Lorem</a>, ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci, ipsum expedita saepe
                                vitae rem atque similique officia, quaerat fugiat praesentium minus consequuntur. Dolores rem
                                iure id atque fugiat doloremque.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci, ipsum expedita saepe
                                vitae rem atque similique officia, quaerat fugiat praesentium minus consequuntur. <a className='underline'>Dolores remiureid </a>
                                atque fugiat doloremque.</p>

                        </div>
                    </div>
                </div>
            </div >
            <RecomendedProducts />

            <div className='@container my-6 mx-4'>
                <div className='grid grid-cols-1 @md:grid-cols-[1fr,1fr] gap-6 items-center'>
                    <div className='@md:p-6'>
                        <img className='object-cover' width='500px' height='500px' src='https://dummyimage.com/800x800/000/fff' loading='lazy' />
                    </div>
                    <div className='space-y-4 p-8'>
                        <h1 className='text-3xl'>Delivery date?</h1>
                        <p>The delivery date is determined by the region and delivery method</p>
                        <p>Please check the delivery date</p>
                        <button className='text-white bg-blue-500 drop-shadow-sm rounded-full min-h-12 min-w-32'>Check</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
