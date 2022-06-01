import './toggle.scss';
import vector1 from '../../resurces/Vector1.png'
import vector2 from '../../resurces/Vector2.png'
import vector3 from '../../resurces/Vector3.png'
import vector4 from '../../resurces/Vector4.png'

const Toggle = () => {
    return (
        <div className='toggle'>
            <div className='toggle__button active__button'>
                <img src={vector1} alt="toggle icon"/>
                <div className='toggle__text'>Runtime</div>
            </div>
            <div className='toggle__button'>
                <img src={vector2} alt="toggle icon"/>
                <div className='toggle__text'>Constructor</div>
            </div>
        </div>
    )
}
export default Toggle;