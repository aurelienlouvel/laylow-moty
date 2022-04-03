import Colors from "./Colors";

export default {
  headTitle: {
    marginTop: 16,
    color: "white",
    textAlign: "center",
    fontSize: 46,
    fontFamily: "Cloister",
  },
  h1: {
    fontSize: 32,
    fontWeight: "800",
    color: Colors.or,
    marginVertical: 24,
  },
  h2: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.blanc,
    marginVertical: 16,
    fontFamily: "Futura-Book",
  },
  h3: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.blanc,
    marginVertical: 8,
  },
  p: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.blanc,
    fontFamily: "Futura-Book",
  },
  underText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff",
    opacity: 0.64,
  },
  bottomText: {
    fontSize: 13,
    paddingVertical: 2,
    color: Colors.blanc,
    opacity: 0.64,
  },
  imgAlbum: {
    borderRadius: 10,
    resizeMode: "contain",
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  festival: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.blanc,
    marginVertical: 6,
  },
  lieu: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.blanc,
  },
  ville: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.or,
  },
  date: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.blanc,
    paddingVertical: 6,
  },
  imgConcert: {
    borderRadius: 10,
    resizeMode: "contain",
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
    marginBottom: 32,
  },
  buttonContent: {
    fontSize: 18,
    marginRight: 16,
    color: Colors.blanc,
  },
};
