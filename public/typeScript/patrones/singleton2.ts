class singleton {
  private static instance: singleton;
  private constructor() {}
  public static getInstance(): singleton {
    if (!singleton.instance) {
      singleton.instance = new singleton();
    }
    return singleton.instance;
  }
}
export default singleton;
