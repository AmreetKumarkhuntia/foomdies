import './style/profile.css';

const Profile = (props) => {

    const profile='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=';

    return ( 
        <>
        <div className='profile'>
            <h1>PROFILE
                <div className='hr1'></div>
            </h1>
            <div className='user'>
                <div className='left'>
                    <span className='color_pink'>Name :</span> {props.userprofile.name} <br/>
                    <span className='color_pink'>Email :</span> {props.userprofile.email} <br/>
                    <span className='color_pink'>Favourites :</span>
                </div>
                <div className='right'>
                    <img src={profile}></img>
                </div>
            </div>
            <div className='reset'>
                <h2 className='color_pink'> Reset Password
                    <div className='hr1'></div>
                </h2>
                <div className='form'>
                    <div >Enter Current Password</div> 
                    <input></input>
                    <div>Enter New Password</div>
                    <input /> <br />
                    <button>Change Password</button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Profile;