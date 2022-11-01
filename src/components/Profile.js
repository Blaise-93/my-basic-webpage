import React, { Component } from 'react';

class Profile extends Component {
    state = {
        twitter_id: '@Blaisemat6',
    
        slack_username: 'Blaisemart',
        profile_imageUrl: 'https://media-exp1.licdn.com/dms/image/C4D03AQHAPU730L-q5w/profile-displayphoto-shrink_800_800/0/1650720157580?e=2147483647&v=beta&t=gbfNwLuJY6uYJ3UJrLsd_HE2FPwMuf71IDX9F4IVQIU',
        
    }
    slack_hidden = {
        textIndent: -9999, 
        whiteSpace: 'nowrap'
    }
   

    render() {
        return (
       <div className='container'>
            <h2 className='mt-3 text-info text-center'>My name is Ejikeme Blaise and I am privileged to join 
                HNG as an Intern student to learn ReactJs, Backend development.
            </h2>
            <p>My profile details are:
                <ul>
                    <li><span>Twitter id - </span>{this.state.twitter_id}</li>
                    <li styles={this.slack_hidden }> <span >slack_id - </span>{this.state.slack_username}</li>
                </ul>
               </p>
             
               <img className='mx-auto d-block img-fluid' src={this.state.profile_imageUrl} alt='Blaisemart'/>
               <figcaption className='text-center'>Blaise Profile Picture</figcaption>
           
        </div>
        );
        }

}
 


export default Profile;
