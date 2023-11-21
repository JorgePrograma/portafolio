import 'package:flutter/material.dart';

class MatenimientoScreen extends StatelessWidget {
  const MatenimientoScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
            Image.asset('assets/images/construyendo.png'),
            const Text("Estamos trabanjando para ofrecerle un ambiente agradable")
              ],
            ),
          ],
        ),
      ),
    );
  }
}
