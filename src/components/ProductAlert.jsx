export default function ProductAlert() {
    return (
        <>
            <div className="@container sticky top-0 w-auto md:max-w-[28rem] z-10 bg-white drop-shadow-md hidden">
                <div className="grid grid-cols-1 grid-flow-row text-sm mx-6">
                    <div className="flex flex-row items-center">
                        <i className="fa fa-check mr-2"></i>
                        <h2 className="flex-1">Item added to your cart</h2>
                        <i className="fa fa-close text-xl ml-0"></i>
                    </div>
                    <div className="flex flex-row items-end p-3 space-x-2 my-4">
                        <img className="object-cover flex-none" src="https://dummyimage.com/120x40/000/fff" />
                        <h3 className="line-clamp-3 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                            dignissimos sint in. Adipisci libero cumque earum quas possimus praesentium aperiam veniam asperiores
                            atque. Maiores totam quos sunt temporibus inventore itaque?</h3>
                    </div>
                    <div>
                        <div className='btn-form flex flex-col text-center max-w-[26rem] mb-6 space-y-2'>
                            <button className='border-2 hover:border-[3px] border-zinc-700 bg-white' type='submit'> View my Cart (2)</button>
                            <button className='inline-flex font-medium text-white bg-purple-600 bg-gradient-to-r hover:from-purple-500'>Check out</button>
                            <label className='underline underline-offset-2 text-sm'>Continue Shopping</label>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}