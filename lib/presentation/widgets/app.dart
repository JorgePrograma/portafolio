import 'package:flutter/material.dart';
import 'package:portafolio/presentation/screen/mantenimiento_screen.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "Portafolio 2023",
      home: MatenimientoScreen(),
    );
  }
}
