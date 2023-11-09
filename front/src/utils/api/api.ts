import {UserData} from "../data/UserData";
import {UserActivity} from "../data/UserActivity";
import {UserAverageSessions} from "../data/UserAverageSessions";
import {UserPerformance} from "../data/UserPerformance";

type Type = "activity" | "average-sessions" | "performance"

export class ApiErrors {
    errors: string;

    constructor(errors: string) {
        this.errors = errors
    }
}


export async function apiFetch(id: string, type?: Type, mockedApi = true) {
    let input = null
    if (mockedApi) {
        input = type ? `/SportSee/user/${id}/${type}/${type}.json` :
        `/SportSee/user/${id}/user.json`
    } else {
        input = type ? `http://localhost:3000/user/${id}/${type}` :
        `http://localhost:3000/user/${id}`
    }
    const response = await fetch(input, {
        headers: {
            Accept: "application/json"
        }
    })
    if (response.status === 204) {
        return null
    }
    const responseData = await response.json()
    if (response.status === 404) {
        throw new ApiErrors(responseData)
    }
    if (responseData) {
        switch (type) {
            case "activity" :
                return new UserActivity(responseData)
            case "average-sessions" :
                return new UserAverageSessions(responseData)
            case "performance" :
                return new UserPerformance(responseData)
            default :
                return new UserData(responseData)
        }
    }
}