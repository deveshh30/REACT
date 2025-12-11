const Navbar = () => {
    return ( 
        <>
            <div className="flex py-4 px-8 bg-cyan-700 justify-between">
                <h2>dev.SH</h2>
                <div className="flex gap-8">
                    <a href="/">About</a>
                    <a href="/Product">Product</a>
                    <a href="/Contact">Contact</a>
                </div>
            </div>
            
        </>
     ); 
}
 
export default Navbar;