import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongTrack = props => {
  const {eachTrack, onClickingDeleteIcon} = props
  const {id, imageUrl, name, genre, duration} = eachTrack

  const onClickDeleteIcon = () => {
    onClickingDeleteIcon(id)
  }

  return (
    <li className="list-container">
      <div className="image-genre-name-container">
        <img className="song-image" src={imageUrl} alt="track" />
        <div className="name-genre-container">
          <p className="name-text">{name}</p>
          <p className="genre-text">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="duration-text">{duration}</p>
        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onClickDeleteIcon}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongTrack
