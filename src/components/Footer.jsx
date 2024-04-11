function Footer() {
    return (
        <>
            <footer className='@container bg-slate-300'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-[18rem,auto] border-b border-slate-400 p-6 md:justify-items-center'>
                    <div>
                        <h2 className="text-bold font-medium">ASSITANCE</h2>
                        <ul className='space-y-4 mt-4'>
                            <li><a className="footer-link" href="#">TERMS OF SERVICE</a></li>
                            <li><a className="footer-link" href="#">PRIVACY POLICY</a></li>
                            <li><a className="footer-link" href="#">REFUND POLICY</a></li>
                            <li><a className="footer-link" href="#">SHIPPING INFO</a></li>
                            <li><a className="footer-link" href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div >
                        <h2 className='text-bold font-medium mt-8'>ABOUT</h2>
                        <ul className='space-y-4 mt-4'>
                            <li><a className="footer-link" href="#">WE ARE</a></li>
                            <li><a className="footer-link" href="#">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div className='md:col-span-2'>
                        <div className='flex flex-row justify-center space-x-6 my-6'>
                            <i className='social-icon fa fa-twitter'></i>
                            <i className='social-icon fa fa-facebook'></i>
                            <i className='social-icon fa fa-instagram'></i>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center my-6 space-y-3'>
                    <p className='text-xs'>2024 All Rights Reserved | By davidivansan@hotmail.com</p>
                </div>
            </footer>

        </>
    );
}

export default Footer;