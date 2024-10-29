import Linda from "../Linda/Linda";
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
                routes.map(route=><Linda key={route.id} route={route}></Linda> )
            }
           </ul>

            
        </nav>
    );
};

export default Navbar;