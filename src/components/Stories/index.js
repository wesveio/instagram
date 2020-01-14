import React, {Component} from 'react';
import './style.css';

export default class Stories extends Component {

    generateStories = (story, i) => {
        return(
            <div className="story__item" key={i}>
                <div className="user__profile-pic">
                    <img src={story.profilepic} alt={story.username} />
                </div>
                <div className="user__profile-name">{story.username}</div>
            </div>
        )
    }

    render() {
        let userStories = [
            {
                "username": "logan_browning",
                "profilepic": "http://smagazineofficial.com/wp-content/uploads/2018/05/Logan-Browning-feature-600x460.jpg"
            },
            {
                "username": "conor_leslie",
                "profilepic": "https://pm1.narvii.com/6813/a99f4b8d7ee1a7f69b9974c0cb5909e5fc86e547v2_hq.jpg"
            },
            {
                "username": "marque_richardson",
                "profilepic": "https://www.cheatsheet.com/wp-content/uploads/2019/07/MarqueRichardsonlaughing-1024x683.jpg"
            },
            {
                "username": "gal_gadot",
                "profilepic": "https://stealthelook.com.br/wp-content/uploads/2019/12/gal-gadot-revlon-truques-de-beleza-capa-20191206203145.jpg"
            },
            {
                "username": "bruce_wayne",
                "profilepic": "https://upload.wikimedia.org/wikipedia/commons/5/57/Iain_Glen.jpg"
            },
            {
                "username": "nicolascage",
                "profilepic": "https://malditosnerds.com/__export/1543336669858/sites/claro/malditosnerds/img/2016/08/12/12_08_2016_19.17.57.jpeg_423682103.jpeg"
            },
            {
                "username": "minka_kelly",
                "profilepic": "https://knownetworth.com/uploads/thumb/minka-kelly-net-worth-415-415.gif"
            },
            {
                "username": "emma_stone",
                "profilepic": "https://feguedes.files.wordpress.com/2011/09/091310-emma-stone-400.jpg?w=584"
            },
        ];

        return (
            <div className="stories">
                {userStories.map(this.generateStories)}
            </div>
        )
    }
}