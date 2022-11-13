import DataSet from "~~/models/dataset";

export default class PopulationChartCtrl {
  constructor(
    public labels: string[],
    public datasets: DataSet[],
  ) {}

}
