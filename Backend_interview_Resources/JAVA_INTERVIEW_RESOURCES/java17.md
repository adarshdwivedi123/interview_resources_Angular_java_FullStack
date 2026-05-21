feature and spring boot
1. Sealed Classes

Control which classes can extend another class.

public sealed class Vehicle
    permits Car, Bike {
}

better security
controlled inheritance

2)Switch Expressions

Cleaner switch syntax.

String result = switch(day) {
    case "MONDAY" -> "Start";
    case "FRIDAY" -> "End";
    default -> "Other";
};
3)4. Text Blocks

Multi-line strings become easy.

String json = """
{
   "name": "Adarsh"
}
""";

4)2. Pattern Matching for instanceof

No need for manual casting.


java 17 sporing boot 3 verison