"pipe() is used to chain multiple operators
 before the data reaches subscribe.

 Each operator has one single job —
 map transforms,
 filter removes unwanted data,
 catchError handles failures,
 finalize hides the loader.

 Without pipe, all this logic
 would go inside subscribe —
 making it messy, hard to test,
 and hard to maintain.

 pipe() keeps each step separate and clean.
 Data flows through operators one by one
 and subscribe only receives the final result.

 This follows the single responsibility principle —
 each operator does only one thing."