// import { useState } from "react"

// const Section = ({ title, description, isVisible, setIsVisible }) => {
//     return (
//         <>
//             <div className="border p-2 m-2 border-black" >
//                 <h3 className="font-bold text-xl">{title}</h3>
//                 {
//                     isVisible ?
//                         ("") :
//                         (<button onClick={() => setIsVisible()}>show</button>)
//                 }
//                 {isVisible && <p>{description}</p>}

//             </div>

//         </>
//     )
// }



// const InstaMart = () => {
//     const [sectionConfig, setSectionConfig] = useState({
//         showAbout: false,
//         showTeam: false,
//         showCarear: false
//     })
//     return (
//         <>
//             <h1 className="text-3xl font-bold p-2 m-2">instamart page</h1>

//             <Section title={"About InstaMart"} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
//                 isVisible={sectionConfig.showAbout}
//                 setIsVisible={() => {
//                     setSectionConfig({
//                         showAbout: true,
//                         showTeam: false,
//                         showCarear: false
//                     })
//                 }} />

//             <Section title={"Team InstaMart"} description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
//                 isVisible={sectionConfig.showTeam}
//                 setIsVisible={() => {
//                     setSectionConfig({
//                         showAbout: false,
//                         showTeam: true,
//                         showCarear: false
//                     })
//                 }} />
//             <Section title={"Carear InstaMart"} description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which "
//                 isVisible={sectionConfig.showCarear}
//                 setIsVisible={() => {
//                     setSectionConfig({
//                         showCarear: true,
//                         showAbout: false,
//                         showTeam: false,
//                     })
//                 }} />
//         </>
//     )
// }
// export default InstaMart  


import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible ,setIsUnVisible}) => {
    return (
        <>
            <div className="border p-2 m-2 border-black" >
                <h3 className="font-bold text-xl">{title}</h3>
                {
                    isVisible ?
                        (<button onClick={() => setIsUnVisible()}>Hide</button>) :
                        (<button onClick={() => setIsVisible()}>show</button>)
                }
                {isVisible && <p>{description}</p>}

            </div>

        </>
    )
}



const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState("")
    function setIsUnVisible(){
        setVisibleSection("")
    }
    return (
        <>
            <h1 className="text-3xl font-bold p-2 m-2">instamart page</h1>

            <Section title={"About InstaMart"} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                isVisible={visibleSection == "about"}
                setIsVisible={() => {
                    setVisibleSection("about")
                }} setIsUnVisible={()=>{
                    setIsUnVisible()
                }}/>

            <Section title={"Team InstaMart"} description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
                isVisible={visibleSection == "team"}
                setIsVisible={() => {
                    setVisibleSection("team")
                }} setIsUnVisible={()=>{
                    setIsUnVisible()
                }}/>
            <Section title={"Carear InstaMart"} description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which "
                isVisible={visibleSection == "career"}
                setIsVisible={() => {
                    setVisibleSection("career")
                }} setIsUnVisible={()=>{
                    setIsUnVisible()
                }}/>
        </>
    )
}
export default InstaMart     