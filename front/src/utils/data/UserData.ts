interface UserInfos  {
    firstName: string,
    lastName: string,
    age: number
}

interface KeyData {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount : number
}

interface IUserData {
    data : {
        userInfos : UserInfos,
        score ?: number,
        todayScore ?: number
        keyData: KeyData
    }
}

export class UserData {
    private readonly _firstName: string
    private readonly _score: number
    private readonly _calorieCount: number
    private readonly _proteinCount: number
    private readonly _carbohydrateCount: number
    private readonly _lipidCount: number

    constructor(data: IUserData) {
        this._firstName = data.data.userInfos.firstName
        this._score = data.data.todayScore || data.data.score as number
        this._calorieCount = data.data.keyData.calorieCount
        this._proteinCount = data.data.keyData.proteinCount
        this._carbohydrateCount = data.data.keyData.carbohydrateCount
        this._lipidCount = data.data.keyData.lipidCount
    }

    get firstName(): string {
        return this._firstName;
    }

    get score(): {score: number} {
        return {
            score: this._score * 100
        }
    }

    get calorieCount(): number {
        return this._calorieCount;
    }

    get proteinCount(): number {
        return this._proteinCount;
    }

    get carbohydrateCount(): number {
        return this._carbohydrateCount;
    }

    get lipidCount(): number {
        return this._lipidCount;
    }
}