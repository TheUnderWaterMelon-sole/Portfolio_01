import "./Header.css"

function Header() {
  
    
    return(
        <>
            <header className="site-header">
                <div className="container">
                    <div className="grid">
                        <div className="col-3">
                            logo goes here
                        </div>
                        <div className="col9">
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Project</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h2>I am the Header</h2>
            </header>
        </>
    )
}

export default Header;