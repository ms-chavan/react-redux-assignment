export class DashboardAction {
  public static setTime = (data: number) => {
    let minutes: number;
    let seconds: number;
    minutes = Math.floor(data / 60);
    seconds = data % 60;

    return {
      type: "SET_TIME",
      payload: {
        formattedTime: minutes + " minutes : " + seconds + " seconds",
        totalSeconds: data + 1,
      },
    };
  };
}
