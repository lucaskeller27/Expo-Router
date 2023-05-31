import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="TelaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "TelaA",
          title: "TelaA",
        }}
      />
      <Drawer.Screen
        name="TelaB" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "TelaB",
          title: "TelaB",
        }}
      />
    </Drawer>
  );
}