export function HowToWorking() {
    return (
        <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                <div className="w-full flex-col justify-start items-center gap-3 flex">
                    <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">How It Works</h2>
                    <p className="max-w-2xl text-center text-gray-400 text-base font-normal leading-relaxed">A detailed breakdown of processes and mechanisms behind a system or product, simplifying complex concepts for easy understanding.</p>
                </div>
                <div className="w-full justify-start items-start gap-8 grid md:grid-cols-3 grid-cols-1">
                    <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-full flex justify-between relative">
                            <h4 className="text-gray-900 text-xl font-semibold leading-8">Input Collection</h4>
                            <h3 className="text-gray-100 text-7xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">1</h3>
                        </div>
                        <p className="text-gray-400 text-base font-normal leading-relaxed">Gather all necessary data or materials required for the process. For example, in a 3D printing project, this involves preparing the digital design files and ensuring the printer has sufficient filament.</p>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-full flex justify-between relative">
                            <h4 className="text-gray-900 text-xl font-semibold leading-8">Processing</h4>
                            <h3 className="text-gray-100 text-7xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">2</h3>
                        </div>
                        <p className="text-gray-400 text-base font-normal leading-relaxed">Execute the core mechanism or operation. For 3D printing, this step includes the printer interpreting the digital model and methodically laying down layers of material to build the object.</p>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="w-full flex justify-between relative">
                            <h4 className="text-gray-900 text-xl font-semibold leading-8">Output and Review</h4>
                            <h3 className="text-gray-100 text-7xl font-extrabold font-manrope leading-[100px] absolute -top-9 right-0">3</h3>
                        </div>
                        <p className="text-gray-400 text-base font-normal leading-relaxed">Finalize the process and assess the results. In 3D printing, this means removing the finished object from the printer, inspecting it for quality, and performing any necessary post-processing steps like sanding or painting.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}