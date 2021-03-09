import {changeDataAC, changeErrorAC} from "../actionCreators";
import axios from "axios";

export const changeInfoFetchAC = (formData) => (dispatch) => {
    const id = formData.get('id')
    axios.post(`${process.env.REACT_APP_URL}/profile/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    }).then(data => dispatch(changeDataAC(data)))

}
