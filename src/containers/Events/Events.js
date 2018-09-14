import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import VideoCard from '../../components/VideoCard/VideoCard';
import Select from '../../components/Select/Select';
import videos from "./source";
import './Events.css';

class Events extends Component {
  render() {
    // const categories = [
    //   {name: 'Маркетинг', link: 'marketing'},
    //   {name: 'Саморозвиток', link: 'self-development'},
    //   {name: 'Product Management', link: 'pm'},
    //   {name: 'IT', link: 'it'},
    //   {name: 'HR', link: 'hr'},
    //   {name: 'Бізнес', link: 'business'},
    // ]
    
    // const categoriesList = categories.map(({...cat}, index) => (
    //   <div className='CategoryItem' key={index}>
    //     <Link to={`/events/${cat.link}`}>{ cat.name }</Link>
    //   </div>
    //   )
    // )

    const videosList = videos.map((video, index) => {
      return(
        <VideoCard video={video} key={index} />
      )
    })

    const categoriesList = [...new Set(videos.map(video => video.category))];
    const languagesList = [...new Set(videos.map(video => video.lang))];
    const citiesList = [...new Set(videos.map(video => video.city))];

    return (
      <div className='EventsContainer'>
        <div className='FiltersList'>
          <Select label='Категорії' name='categories'  options={categoriesList} />
          <Select label='Мови' name='lang' options={languagesList} />
          <Select label='Міста' name='city' options={citiesList} />
        </div>
        <div>{ videosList }</div>
      </div>
    );
  }
}

export default Events;