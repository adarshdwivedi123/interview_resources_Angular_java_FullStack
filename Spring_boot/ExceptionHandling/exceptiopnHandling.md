#)We handle exceptions in Spring Boot using @ControllerAdvice and @ExceptionHandler.
#)@ControllerAdvice is used for global exception handling and returns a custom JSON error response.”
#)I create one class for exception handling and inside it I use @ExceptionHandler to handle specific exceptions.
So instead of writing try-catch everywhere, all exceptions go to one place and return clean JSON responses.”


-----------------------------------------------------------
#)CustomException
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
This exception will be thrown when user is not found.

✅ Step 2: Throw exception inside Service
java
Copy code
public User getUserById(int id) {
    return repo.findById(id)
 
            .orElseThrow(() -> new UserNotFoundException("User not found with id " + id));
}


------------------------------------------------------------------------
#)R

Global Exception Handler (@ControllerAdvice)

GlobalExceptionHandler.java

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> handleUserNotFound(UserNotFoundException ex) {

        Map<String, Object> error = new HashMap<>();
        error.put("error", ex.getMessage());
        error.put("status", HttpStatus.NOT_FOUND.value());

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}