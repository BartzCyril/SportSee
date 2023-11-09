
interface userAverageSessionsData {
    day: number,
    sessionLength : number
}

interface IUserAverageSessions {
    data : {
        sessions: userAverageSessionsData[]
    }
}

export class UserAverageSessions {
    private userAverageSessionsData: userAverageSessionsData[]

    private days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']

    constructor(data: IUserAverageSessions) {
        const copyData = data.data.sessions
        const falseData1 = {
            day: 0,
            sessionLength: copyData[0].sessionLength
        }
        const falseData2 = {
            day: 8,
            sessionLength: copyData[copyData.length - 1].sessionLength
        }
        copyData.splice(0, 0, falseData1);
        copyData.push(falseData2)
        this.userAverageSessionsData = copyData

    }

    get data() {
        return this.userAverageSessionsData.map((session) => {
            return {
                day: this.days[session.day],
                sessionLength : session.sessionLength
            }
        })
    }

}