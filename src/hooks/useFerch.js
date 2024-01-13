import axios from "axios";
import { useState } from "react"


const useFerch = (BaseUrl) => {
    const [info, setInfo] = useState()

    const getAll = (path) => {
        const url = `${BaseUrl}${path}/`;

        axios.get(url)
            .then(res => setInfo(res.data))
            .catch(err => console.log(err))

    }
    const CreateRegister = (path, data) => {
        const url = `${BaseUrl}${path}/`;

        axios.post(url, data)
            .then(res => setInfo([...info, res.data]))
            .catch(err => console.log(err))

    }
    const deleteRegister = (path, id) => {
        const url = `${BaseUrl}${path}/${id}/`;
        axios.delete(url)
            // eslint-disable-next-line no-unused-vars
            .then(res => {
                const infoFilter = info.filter((element) => element.id !== id)
                setInfo(infoFilter)
            })
            .catch(err => console.log(err))


    }

    const updateRegister = (path, id, data) => {
        const url = `${BaseUrl}${path}/${id}/`;
        axios.put(url, data)
            // eslint-disable-next-line no-unused-vars
            .then(res => {
                const infoUpdate = info.map(element => {
                    if (id === element.id) {
                        return data
                    } else {
                        return element
                    }
                })
                setInfo(infoUpdate)
            })
            .catch(err => console.log(err))


    }



    return [info, getAll, CreateRegister, deleteRegister, updateRegister]
}

export default useFerch