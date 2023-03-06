
function Profile(props){
    return (
        <div className="Profile">
            <text className="username">{props.username}</text>
            <img className="usericon" src={props.usericon}/>
        </div>
    );
}

export default Profile;