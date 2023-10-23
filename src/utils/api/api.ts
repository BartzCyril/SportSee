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
    const input = mockedApi ?
        type ? `http://localhost:5173/user/${id}/${type}/${type}.json` :
            `http://localhost:5173/user/${id}/user.json` : type ?
            "/SportSee/user/" + id + "/" + type :
            "/SportSee/user/" + id
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