import User from '../schemas/User'

class UserController{
    create(request, response){
        const body = request.body
        console.log(body)
        return response.send()
    }
}

export default new UserController()