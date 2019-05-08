<#

.SYNOPSIS
Checks for WimRM service every 2 seconds, 30 times.

.DESCRIPTION
Checks for WimRM service every 2 seconds, 30 times.

.ROLE
Readers

#>

Param
(
     [Parameter(Mandatory = $true)]
     [string]$updatesToInstall
)

Invoke-WmiMethod -Class CCM_SoftwareUpdatesManager -Name InstallUpdates -ArgumentList (,$updatesToInstall) -Namespace root\CCM\ClientSDK