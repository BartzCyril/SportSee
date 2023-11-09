interface UserActivityData {
    day : Date
    kilogram : number,
    calories: number

}

interface IUserActivity {
    data : {
        sessions: UserActivityData[]
    }
}

export class UserActivity {

    private readonly userActivityData : UserActivityData[]

    constructor(data: IUserActivity) {
        this.userActivityData = data.data.sessions
    }

    get data() {
        return this.userActivityData.map((session) => {
            return  {
                day: new Date(session.day).getDate(),
                kilogram: session.kilogram,
                calories: session.calories
            }
        })
    }

}