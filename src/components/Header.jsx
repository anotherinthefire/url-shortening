import logo from "../assets/logo.svg"

export default function Header() {
    return (
        <>
            <article className="flex items-center">
                <img src={logo} alt="" />

                <nav className="hidden md:block md:ml-5">
                    <ul className="flex items-start justify-start">
                        <li>
                            <button className="text-slate-400">Features</button>
                        </li>
                        <li className="my-5 md:my-0 md:mx-5">
                            <button className="text-slate-400">Pricing</button>
                        </li>
                        <li>
                            <button className="text-slate-400">Resources</button>
                        </li>
                    </ul>
                </nav>
            </article>

            <div className="hidden md:block">
                <ul className="flex items-center ml-5">
                    <li className="my-5 md:my-0 md:mr-5">
                        <button className="text-slate-400">Login</button>
                    </li>
                    <li>
                        <button className="btn-cta rounded-full">Sign Up</button>
                    </li>
                </ul>
            </div>
        </>
    )
}