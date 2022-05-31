import './actions.scss';

const Actions = () => {
    return (
        <div className='actions'>
            <div className='actions__item'>
                <div className='actions__value'>/</div>
            </div>
            <div className='actions__item'>
                <div className='actions__value'>x</div>
            </div>
            <div className='actions__item'>
                <div className='actions__value'>-</div>
            </div>
            <div className='actions__item'>
                <div className='actions__value'>+</div>
            </div>
        </div>
    )
}
export default Actions;