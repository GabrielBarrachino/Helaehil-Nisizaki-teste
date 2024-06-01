function Footer(){
    return(
        <footer className="bg-brand-primary-700">
            <div className="container mx-auto p-6 lg:py-12 lg:px-0">
                <div className="py-12 border-solid border-b-2 border-b-slate-800">
                    <h2 className="text-brand-neutral-50 text-lg font-semibold font-inter lg:text-3xl">Formalize operações imobiliárias <br/>com facilidade e agilidade.</h2>
                </div>
                <div className="pt-12 font-inter lg:flex lg:items-start lg:gap-32 mb-12">
                    <div className="pb-8">
                        <h3 className="text-brand-neutral-50 font-semibold mb-1 uppercase">Recursos</h3>
                        <ul>
                            <li className="mb-4"><a href="#" className="text-brand-neutral-300 ">História</a></li>
                            <li><a href="#" className="text-brand-neutral-300">Contato</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-brand-neutral-50 font-semibold mb-1 uppercase">Contato</h3>
                        <ul>
                            <li className="text-brand-neutral-300">suporte@hnadvocacia.com.br</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer