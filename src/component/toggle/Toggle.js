import './toggle.scss';
import eyeA from '../../resurces/eye activate.png'
import eyeD from '../../resurces/eye.png'
import selectorA from '../../resurces/selector activate.png'
import selectorD from '../../resurces/selector.png'

const Toggle = ({onToggle, mode}) => {
    return (
        <div className='toggle'>
            <div className={mode ? 'toggle__button active__button' : 'toggle__button'} type="button" onClick={onToggle}>
                <img src={mode ? eyeA : eyeD} alt="toggle icon"/>
                <div className='toggle__text'>Runtime</div>
            </div>
            <div className={!mode ? 'toggle__button active__button' : 'toggle__button'} type="button" onClick={onToggle}>
                <img src={!mode ? selectorA : selectorD} alt="toggle icon"/>
                <div className='toggle__text'>Constructor</div>
            </div>
        </div>
    )
}
export default Toggle;