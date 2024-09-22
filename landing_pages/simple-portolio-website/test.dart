import 'dart:io';

String transformString(String input) {

  StringBuffer result = StringBuffer();
  
  for (int i = 0; i < input.length; i++) {
    result.write(input[i]);
    
    if ((i + 1) % 2 == 0 && i != input.length - 1) {
      result.write('x');
    }
  }

  return result.toString();
}

void main() {
    
  String input = stdin.readLineSync()!;

  String transformed = transformString(input);

  print(transformed);
}
