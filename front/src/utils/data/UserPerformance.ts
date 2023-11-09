export interface PerformanceData {
    value: number,
    kind: number
}

export interface IUserPerformance {
    data : {
        data : PerformanceData[]
    }
}


export class UserPerformance {
    private kind = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"]

    private performanceData : PerformanceData[]

    constructor(data: IUserPerformance) {
        this.performanceData = data.data.data
    }

    get data() {
        return this.performanceData.reverse().map((trainingDomain) => {
            return {
                kind: this.kind[trainingDomain.kind - 1],
                value: trainingDomain.value
            }
        })
    }
}