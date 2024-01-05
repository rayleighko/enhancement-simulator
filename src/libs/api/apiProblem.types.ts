export type GeneralApiProblem<T = unknown> =
  /**
   * Times up.
   */
  | { kind: "timeout"; temporary: true; data?: T }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: "cannot-connect"; temporary: true; data?: T }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: "server"; data?: T }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: "unauthorized"; data?: T }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: "forbidden"; data?: T }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: "not-found"; data?: T }
  /**
   * All other 4xx series errors.
   */
  | { kind: "rejected"; data?: T }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: "unknown"; temporary: true; data?: T }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: "bad-data"; data?: T }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: "cancel"; data?: T }
