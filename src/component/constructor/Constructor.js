import './constructor.scss'
import icon from '../../resurces/icon.png'

const Constructor = () => {
    return (
        <div className='constructor'>
            <div>
                <img src={icon} alt="icon" />
                <div className='constructor__text1'>Перетащите сюда</div>
                <div className='constructor__text2'>любой элемент <br/> из левой панели</div>
            </div>
        </div>
    )
}
export default Constructor;