# MMM-Sunrise-Sunset
A MagicMirror module to show local sunrise/sunset/noon times
> This is an extension to the [MagicMirror](https://github.com/MichMich/MagicMirror) project, allowing the display of local sunrise, sunset and solar noon times.

![](https://raw.githubusercontent.com/prydonian/MMM-Sunrise-Sunset/master/Screenshot.png)

![](https://raw.githubusercontent.com/prydonian/MMM-Sunrise-Sunset/master/List.png)

## Installation
Run these commands at the root of your magic mirror install.

```shell
cd modules
git clone https://github.com/prydonian/MMM-Sunrise-Sunset
```

## Updating

```shell
cd MagicMirror/modules/MMM-Sunrise-Sunset
git pull
```

## Using the module
To use this module, add the following configuration block to the modules array in the `config/config.js` file.
Works best in the bottom_bar position when the layout is set to "inline".

```js
var config = {
    modules: [
        {
            module: 'MMM-Sunrise-Sunset',
            position: "bottom_bar",
            config: {
                // See below for configurable options
            }
        }
    ]
}
```

<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>latitude</code>*</td>
			<td>
      Your local latitude. e.g.: "21.567"
			</td>
		</tr>
		<tr>
			<td><code>longitude</code>*</td>
			<td>
      Your local longitude. e.g.: "12.789"
			</td>
		</tr>
		<tr>
			<td><code>timezone</code>*</td>
			<td>
      Default: "Europe/London". Find yours at https://timezonedb.com/time-zones
			</td>
		</tr>
		<tr>
			<td><code>layout</code>*</td>
			<td>
      "inline" or "list"
			</td>
		</tr>
	</tbody>
</table>
*required