import {ReactComponent as GoBack} from "../../assets/icons/arrow-go-back.svg"
import {useNavigate} from "react-router"

export const ButtonGoBack = () => {
    const navigate = useNavigate()

    const goHomeHandler = () => navigate('/')

    return (
        <div className="button button--outline button--add go-back-btn" onClick={goHomeHandler}>
            <GoBack/>
            <span>Вернуться назад</span>
        </div>
    )
}
