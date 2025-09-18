export default function Section({children}){
    return(
        <section className="section mt-9">
            <div className="container w-full mx-auto max-w-[992px]">
                {children}
            </div>
        </section>    
    )
}