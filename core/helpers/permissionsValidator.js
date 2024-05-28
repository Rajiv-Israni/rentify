async function permissionsValidator(
  identifier,
  identifierPermissionInformation,
  identifierPermissionStatus,
  requestPermission
) {
  //identifier for type of permission information such as camera, location, and so on...
  if (
    identifierPermissionInformation.status ===
    identifierPermissionStatus.UNDETERMINED
  ) {
    const permissionResponse = await requestPermission();

    return permissionResponse.granted;
  }

  if (
    identifierPermissionInformation.status === identifierPermissionStatus.DENIED
  ) {
    Alert.alert(
      "Insuffiecient Permissions!",
      `You need to grant ${identifier} permissions to use this app.`
    );
    return false;
  }

  return true;
}

export default permissionsValidator;
