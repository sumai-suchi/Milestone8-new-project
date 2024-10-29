

const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
      

    return (
        <nav>
            
           <ul className="md:flex">
           {
                routes.map(route=><li className="mr-4 font-semibold" key={route.id}>
                    <a href={`${route.path}`}>{route.name}</a>
                </li> )
            }
           </ul>

            
        </nav>
    );
};

export default Navbar;