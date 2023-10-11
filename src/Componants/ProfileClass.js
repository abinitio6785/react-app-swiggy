import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "dummy name",
                location: "location"
            }
        }
        console.log("constructor");
    }
    async componentDidMount() {
        this.timer =setInterval(()=>{
            console.log("set interval called");
        },1000)
        let data = await fetch("https://api.github.com/users/Samrood8796")
        let json = await data.json()
        this.setState({
            userInfo: json
        })
        console.log("monuting");
    }
    componentWillUnmount() {
        clearInterval(this.timer)
        console.log("unmounting");
    }

    render() {
        const {
            avatar_url,
            name,
            followers,
            following,
            location
        } = this?.state?.userInfo

        console.log("render");
        return <div>
            <h1>profile class</h1>
            <img src={avatar_url}></img>
            <h1>name:{name}</h1>
            <h1>following:{following}</h1>
            <h1>followers:{followers}</h1>
            <h1>location:{location}</h1>

        </div>
    }
}
export default ProfileClass;